import { questions } from '../data/quiz';
import { products } from '../data/products';
const dims = ['spicy', 'intensity', 'social', 'chill', 'classic'];
export function calculateUserProfile(answers) { const raw = { spicy: 0, intensity: 0, social: 0, chill: 0, classic: 0 }; questions.forEach(q => { const a = q.options.find(o => o.id === answers[q.id]); if (a)
    dims.forEach(d => raw[d] += a.scores[d] || 0); }); const max = questions.reduce((acc, q) => acc + Math.max(...q.options.map(o => dims.reduce((n, d) => n + (o.scores[d] || 0), 0))), 0); const scale = Math.max(1, max / 5) * 4; return { spicy: Math.round(Math.min(100, raw.spicy / scale * 100)), intensity: Math.round(Math.min(100, raw.intensity / scale * 100)), social: Math.round(Math.min(100, raw.social / scale * 100)), chill: Math.round(Math.min(100, raw.chill / scale * 100)), classic: Math.round(Math.min(100, raw.classic / scale * 100)) }; }
function distance(a, b) { return Math.sqrt(dims.reduce((n, d) => n + Math.pow(a[d] - b[d], 2), 0)); }
export function selectBestMatch(profile, answers) { const ranked = products.map(product => ({ product, d: distance(profile, product.profile) })).sort((a, b) => a.d - b.d); const winner = ranked[0]; const tie = ranked[1] && winner.d - ranked[1].d < 12; let product = winner.product; if (tie) {
    const flavor = answers.flavor;
    const tieProduct = ranked.slice(0, 2).find(x => x.product.id === flavor || x.product.id === 'chilimon' && flavor === 'chilimon' || x.product.id === 'jalapenos' && flavor === 'spicy');
    if (tieProduct)
        product = tieProduct.product;
} const pct = Math.round(Math.max(88, Math.min(98, 98 - winner.d / 12))); return { product, percentage: pct, profile }; }
