export async function saveMatch(match, answers, source) { localStorage.setItem('diana-demo-total', String(Number(localStorage.getItem('diana-demo-total') || 0) + 1)); const url = import.meta.env.VITE_SUPABASE_URL, key = import.meta.env.VITE_SUPABASE_ANON_KEY; if (!url || !key)
    return; try {
    await fetch(`${url}/rest/v1/diana_matches`, { method: 'POST', headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify({ product_id: match.product.id, match_percentage: match.percentage, favorite_flavor: answers.flavor, mood: answers.mood, social_role: answers.social, consumption_moment: answers.moment, intensity: answers.intensity, spicy_score: match.profile.spicy, social_score: match.profile.social, intensity_score: match.profile.intensity, chill_score: match.profile.chill, classic_score: match.profile.classic, source }) });
}
catch (e) {
    if (import.meta.env.DEV)
        console.warn('Analytics unavailable', e);
} }
export const trackEvent = (name, data) => { if (import.meta.env.DEV)
    console.info(`[diana] ${name}`, data || ''); };
