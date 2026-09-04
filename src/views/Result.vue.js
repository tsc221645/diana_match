import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useExperience } from '../composables/useExperience';
import { trackEvent } from '../services/analytics';
const router = useRouter();
const { match, reset, source } = useExperience();
const error = ref('');
const shareOpen = ref(false);
const canShare = typeof navigator !== 'undefined' && !!navigator.share;
const profileItems = computed(() => [{ key: 'spicy', emoji: '🌶️', label: 'Picante' }, { key: 'intensity', emoji: '🔥', label: 'Intensidad' }, { key: 'social', emoji: '🎉', label: 'Social' }, { key: 'chill', emoji: '😌', label: 'Chill' }].map(item => ({ ...item, value: match.value?.profile[item.key] || 0 })));
function restart() { reset(); router.push('/'); }
function openShare() { shareOpen.value = true; trackEvent('share_card_created'); }
async function share() { if (!match.value)
    return; try {
    const canvas = document.createElement('canvas');
    canvas.width = 720;
    canvas.height = 1280;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e52329';
    ctx.fillRect(0, 0, 720, 1280);
    ctx.fillStyle = '#fff4dc';
    ctx.fillRect(32, 32, 656, 1216);
    ctx.fillStyle = '#202020';
    ctx.textAlign = 'center';
    ctx.font = 'bold 34px Arial';
    ctx.fillText('DIANA MATCH', 360, 120);
    ctx.font = '140px Arial';
    ctx.fillText(match.value.product.emoji, 360, 380);
    ctx.font = 'bold 58px Arial';
    ctx.fillText(match.value.product.name, 360, 510);
    ctx.fillStyle = '#e52329';
    ctx.font = 'bold 70px Arial';
    ctx.fillText(`${match.value.percentage}%`, 360, 640);
    ctx.fillStyle = '#202020';
    ctx.font = 'bold 30px Arial';
    ctx.fillText(match.value.product.archetype, 360, 710);
    ctx.font = '26px Arial';
    ctx.fillText('¿QUÉ DIANA SOS?', 360, 1130);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (!blob)
        throw new Error('card');
    const file = new File([blob], `mi-diana-match-${match.value.product.id}.png`, { type: 'image/png' });
    if (canShare && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: 'Mi Diana Match', files: [file] });
        trackEvent('result_shared');
        return;
    }
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
}
catch {
    error.value = 'No pudimos abrir el menú de compartir. Podés guardar tu tarjeta.';
} }
onMounted(() => { if (source.value === 'kiosk')
    setTimeout(() => { if (location.pathname === '/result')
        restart(); }, 60000); });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.match) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: "result shell" },
        ...{ style: ({ '--product-color': __VLS_ctx.match.product.color }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
        ...{ class: "result-head" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "brand-logo" },
        src: "../assets/logo_diana_match_transparente.png",
        alt: "Diana Match",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.restart) },
        ...{ class: "text-btn" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "reveal" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "kicker" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "product-image" },
        src: (__VLS_ctx.match.product.image),
        alt: (__VLS_ctx.match.product.name),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.match.product.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "match-pill" },
    });
    (__VLS_ctx.match.percentage);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "archetype" },
    });
    (__VLS_ctx.match.product.archetype);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "description" },
    });
    (__VLS_ctx.match.product.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.blockquote, __VLS_intrinsicElements.blockquote)({});
    (__VLS_ctx.match.product.quote);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "profile-card" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "kicker" },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.profileItems))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (item.key),
            ...{ class: "profile-row" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item.emoji);
        (item.label);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (item.value);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "bar" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
            ...{ style: ({ width: item.value + '%' }) },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "stand-card" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "badge" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.openShare) },
        ...{ class: "cta wide" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    if (__VLS_ctx.error) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "error" },
        });
        (__VLS_ctx.error);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.restart) },
        ...{ class: "secondary" },
    });
    if (__VLS_ctx.shareOpen) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "share-overlay" },
            role: "dialog",
            'aria-modal': "true",
            'aria-label': "Tarjeta compartible",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "share-modal" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.match))
                        return;
                    if (!(__VLS_ctx.shareOpen))
                        return;
                    __VLS_ctx.shareOpen = false;
                } },
            ...{ class: "share-close" },
            'aria-label': "Cerrar",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "kicker" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "share-card" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            ...{ class: "share-logo" },
            src: "../assets/logo_diana_match_transparente.png",
            alt: "Diana Match",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "share-eyebrow" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            ...{ class: "share-product" },
            src: (__VLS_ctx.match.product.image),
            alt: (__VLS_ctx.match.product.name),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.match.product.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (__VLS_ctx.match.percentage);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "share-archetype" },
        });
        (__VLS_ctx.match.product.archetype);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.match.product.quote);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "share-actions" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.share) },
            ...{ class: "cta" },
        });
        (__VLS_ctx.canShare ? 'COMPARTIR' : 'GUARDAR TARJETA');
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.match))
                        return;
                    if (!(__VLS_ctx.shareOpen))
                        return;
                    __VLS_ctx.shareOpen = false;
                } },
            ...{ class: "secondary" },
        });
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main)({
        ...{ class: "shell" },
    });
}
/** @type {__VLS_StyleScopedClasses['result']} */ ;
/** @type {__VLS_StyleScopedClasses['shell']} */ ;
/** @type {__VLS_StyleScopedClasses['result-head']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['text-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['product-image']} */ ;
/** @type {__VLS_StyleScopedClasses['match-pill']} */ ;
/** @type {__VLS_StyleScopedClasses['archetype']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-card']} */ ;
/** @type {__VLS_StyleScopedClasses['kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-row']} */ ;
/** @type {__VLS_StyleScopedClasses['bar']} */ ;
/** @type {__VLS_StyleScopedClasses['stand-card']} */ ;
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
/** @type {__VLS_StyleScopedClasses['cta']} */ ;
/** @type {__VLS_StyleScopedClasses['wide']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['share-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['share-modal']} */ ;
/** @type {__VLS_StyleScopedClasses['share-close']} */ ;
/** @type {__VLS_StyleScopedClasses['kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['share-card']} */ ;
/** @type {__VLS_StyleScopedClasses['share-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['share-eyebrow']} */ ;
/** @type {__VLS_StyleScopedClasses['share-product']} */ ;
/** @type {__VLS_StyleScopedClasses['share-archetype']} */ ;
/** @type {__VLS_StyleScopedClasses['share-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['cta']} */ ;
/** @type {__VLS_StyleScopedClasses['secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['shell']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            match: match,
            error: error,
            shareOpen: shareOpen,
            canShare: canShare,
            profileItems: profileItems,
            restart: restart,
            openShare: openShare,
            share: share,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
