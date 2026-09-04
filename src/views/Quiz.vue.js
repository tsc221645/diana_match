import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { questions } from '../data/quiz';
import { useExperience } from '../composables/useExperience';
import { trackEvent } from '../services/analytics';
const router = useRouter();
const { answers, finish } = useExperience();
const index = ref(Math.max(0, questions.findIndex(item => !answers.value[item.id])));
const calculating = ref(false);
const loadingText = ref('ANALIZANDO TU ANTOJO...');
const question = computed(() => questions[index.value]);
function back() { if (index.value > 0)
    index.value -= 1;
else
    router.push('/'); }
function choose(id) { answers.value[question.value.id] = id; trackEvent('question_answered', { question: question.value.id }); if (index.value < 4) {
    setTimeout(() => { index.value += 1; }, 280);
    return;
} calculating.value = true; const lines = ['ANALIZANDO TU ANTOJO...', 'Midiendo tu nivel de picante... 🌶️', 'Evaluando tus malas decisiones... 👀', 'Buscando tu Diana perfecto...']; let lineIndex = 0; const timer = setInterval(() => { lineIndex += 1; loadingText.value = lines[lineIndex] || lines[3]; if (lineIndex >= 3) {
    clearInterval(timer);
    finish();
    setTimeout(() => router.push('/result'), 450);
} }, 500); }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "quiz shell" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "quiz-head" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.back) },
    ...{ class: "icon-btn" },
    'aria-label': "Volver",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "wordmark" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "counter" },
});
(__VLS_ctx.index + 1);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "progress" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span)({
    ...{ style: ({ width: `${((__VLS_ctx.index + 1) / 5) * 100}%` }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "quiz-art" },
    'aria-hidden': "true",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/spicy.png",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/queso.png",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/lemon.png",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/fuego.png",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "question" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "kicker" },
});
(__VLS_ctx.question.eyebrow || `PREGUNTA ${__VLS_ctx.index + 1} DE 5`);
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(__VLS_ctx.question.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "options" },
});
for (const [option] of __VLS_getVForSourceType((__VLS_ctx.question.options))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.choose(option.id);
            } },
        key: (option.id),
        ...{ class: "option" },
        ...{ class: ({ selected: __VLS_ctx.answers[__VLS_ctx.question.id] === option.id }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "option-emoji" },
    });
    (option.emoji);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (option.label);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "arrow" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "hint" },
});
if (__VLS_ctx.calculating) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "loading" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "spinner" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.loadingText);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
/** @type {__VLS_StyleScopedClasses['quiz']} */ ;
/** @type {__VLS_StyleScopedClasses['shell']} */ ;
/** @type {__VLS_StyleScopedClasses['quiz-head']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['wordmark']} */ ;
/** @type {__VLS_StyleScopedClasses['counter']} */ ;
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
/** @type {__VLS_StyleScopedClasses['quiz-art']} */ ;
/** @type {__VLS_StyleScopedClasses['question']} */ ;
/** @type {__VLS_StyleScopedClasses['kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['options']} */ ;
/** @type {__VLS_StyleScopedClasses['option']} */ ;
/** @type {__VLS_StyleScopedClasses['selected']} */ ;
/** @type {__VLS_StyleScopedClasses['option-emoji']} */ ;
/** @type {__VLS_StyleScopedClasses['arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['hint']} */ ;
/** @type {__VLS_StyleScopedClasses['loading']} */ ;
/** @type {__VLS_StyleScopedClasses['spinner']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            answers: answers,
            index: index,
            calculating: calculating,
            loadingText: loadingText,
            question: question,
            back: back,
            choose: choose,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
