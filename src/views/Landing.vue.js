import { useRouter, useRoute } from 'vue-router';
import { trackEvent } from '../services/analytics';
const router = useRouter(), route = useRoute();
function start() { sessionStorage.removeItem('diana-answers'); sessionStorage.removeItem('diana-result'); trackEvent('quiz_started'); router.push({ path: '/quiz', query: route.query }); }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "landing shell" },
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "snack-orbit" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "snack-product s1" },
    src: "../assets/diana_jalapenos.png",
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "snack-product s2" },
    src: "../assets/diana_quesitos.png",
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "snack-product s3" },
    src: "../assets/diana_jalapenos_chilimon.png",
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "snack-product s4" },
    src: "../assets/diana_maiz_chino.png",
    alt: "",
});
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
/** @type {__VLS_StyleScopedClasses['snack-orbit']} */ ;
/** @type {__VLS_StyleScopedClasses['snack-product']} */ ;
/** @type {__VLS_StyleScopedClasses['s1']} */ ;
/** @type {__VLS_StyleScopedClasses['snack-product']} */ ;
/** @type {__VLS_StyleScopedClasses['s2']} */ ;
/** @type {__VLS_StyleScopedClasses['snack-product']} */ ;
/** @type {__VLS_StyleScopedClasses['s3']} */ ;
/** @type {__VLS_StyleScopedClasses['snack-product']} */ ;
/** @type {__VLS_StyleScopedClasses['s4']} */ ;
/** @type {__VLS_StyleScopedClasses['cta']} */ ;
/** @type {__VLS_StyleScopedClasses['tiny']} */ ;
/** @type {__VLS_StyleScopedClasses['flavors']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
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
