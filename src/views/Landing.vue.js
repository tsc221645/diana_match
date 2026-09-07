import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { trackEvent } from '../services/analytics';
import ProductOrbit from '../components/ProductOrbit.vue';
const router = useRouter();
const route = useRoute();
const variant = computed(() => { const value = Number(route.query.variant || 1); return value >= 1 && value <= 3 ? value : 1; });
function start() { sessionStorage.removeItem('diana-answers'); sessionStorage.removeItem('diana-result'); trackEvent('quiz_started'); router.push({ path: '/quiz', query: route.query }); }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "landing shell" },
    ...{ class: (`landing-v${__VLS_ctx.variant}`) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "topbar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "brand-logo" },
    src: "../assets/logo_diana_match_transparente.png",
    alt: "Diana Match",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "live-link" },
});
if (__VLS_ctx.variant === 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "landing-sticker sticker-spicy" },
        src: "../assets/spicy.png",
        alt: "",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "landing-sticker sticker-lemon" },
        src: "../assets/lemon.png",
        alt: "",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "hero" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "sticker" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "kicker" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "lead" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    /** @type {[typeof ProductOrbit, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ProductOrbit, new ProductOrbit({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.start) },
        ...{ class: "cta" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "tiny" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flavors" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
else if (__VLS_ctx.variant === 2) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "hero hero-poster" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "poster-copy" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "kicker" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "lead" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.start) },
        ...{ class: "cta" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "poster-products" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../assets/diana_jalapenos.png",
        alt: "Jalapeños Diana",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../assets/diana_quesitos.png",
        alt: "Quesitos Diana",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../assets/diana_jalapenos_chilimon.png",
        alt: "Chilimón Diana",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "../assets/diana_nachos.png",
        alt: "Nachos Diana",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "poster-tag" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "hero hero-sticker" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "sticker big-sticker" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "hero-sticker-copy" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "kicker" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "lead" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.start) },
        ...{ class: "cta" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "sticker-product sticker-jalapeno" },
        src: "../assets/diana_jalapenos.png",
        alt: "Jalapeños Diana",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "sticker-product sticker-queso" },
        src: "../assets/diana_quesitos.png",
        alt: "Quesitos Diana",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "sticker-icon sticker-fuego" },
        src: "../assets/fuego.png",
        alt: "",
    });
}
/** @type {__VLS_StyleScopedClasses['landing']} */ ;
/** @type {__VLS_StyleScopedClasses['shell']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['live-link']} */ ;
/** @type {__VLS_StyleScopedClasses['landing-sticker']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-spicy']} */ ;
/** @type {__VLS_StyleScopedClasses['landing-sticker']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-lemon']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker']} */ ;
/** @type {__VLS_StyleScopedClasses['kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['lead']} */ ;
/** @type {__VLS_StyleScopedClasses['cta']} */ ;
/** @type {__VLS_StyleScopedClasses['tiny']} */ ;
/** @type {__VLS_StyleScopedClasses['flavors']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-poster']} */ ;
/** @type {__VLS_StyleScopedClasses['poster-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['lead']} */ ;
/** @type {__VLS_StyleScopedClasses['cta']} */ ;
/** @type {__VLS_StyleScopedClasses['poster-products']} */ ;
/** @type {__VLS_StyleScopedClasses['poster-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-sticker']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker']} */ ;
/** @type {__VLS_StyleScopedClasses['big-sticker']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-sticker-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['lead']} */ ;
/** @type {__VLS_StyleScopedClasses['cta']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-product']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-jalapeno']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-product']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-queso']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['sticker-fuego']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ProductOrbit: ProductOrbit,
            variant: variant,
            start: start,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
