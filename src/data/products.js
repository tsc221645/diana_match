import jalapenosImage from '../assets/diana_jalapenos.png';
import quesitosImage from '../assets/diana_quesitos.png';
import churritosImage from '../assets/diana_maiz_chino.png';
import chilimonImage from '../assets/diana_jalapenos_chilimon.png';
import nachosImage from '../assets/diana_nachos.png';
import favorimixImage from '../assets/diana_alboroto.png';
export const products = [
    { id: 'jalapenos', name: 'JALAPEÑOS', emoji: '🌶️', image: jalapenosImage, archetype: 'EL INTENSO', description: 'Atrevido, espontáneo y un poquito peligroso.', quote: 'Decís que ya aprendiste y volvés con tu ex.', color: '#e52329', profile: { spicy: 100, intensity: 95, social: 65, chill: 20, classic: 35 } },
    { id: 'quesitos', name: 'QUESITOS', emoji: '🧀', image: quesitosImage, archetype: 'EL BUENA ONDA', description: 'Relajado, sociable y siempre cae bien.', quote: 'Siempre llegás tarde, pero al menos traés comida.', color: '#ffb800', profile: { spicy: 10, intensity: 35, social: 85, chill: 85, classic: 60 } },
    { id: 'churritos', name: 'CHURRITOS', emoji: '🌽', image: churritosImage, archetype: 'EL CLÁSICO', description: 'Práctico, confiable y sin complicaciones.', quote: 'Podés sobrevivir una semana con Q50.', color: '#cf7626', profile: { spicy: 25, intensity: 40, social: 55, chill: 80, classic: 100 } },
    { id: 'chilimon', name: 'CHILIMÓN', emoji: '🍋', image: chilimonImage, archetype: 'EL ATREVIDO', description: 'Curioso, intenso y siempre querés algo diferente.', quote: 'Le ponés limón hasta al limón.', color: '#6a9c32', profile: { spicy: 85, intensity: 90, social: 55, chill: 25, classic: 30 } },
    { id: 'nachos', name: 'NACHOS', emoji: '🔥', image: nachosImage, archetype: 'EL SOCIAL', description: 'Donde hay gente, probablemente ahí estás vos.', quote: 'Nunca organizás la reunión, pero siempre llegás.', color: '#f08a21', profile: { spicy: 35, intensity: 60, social: 100, chill: 60, classic: 70 } },
    { id: 'favorimix', name: 'FAVORI MIX', emoji: '🎉', image: favorimixImage, archetype: 'EL IMPREDECIBLE', description: 'Un poquito de todo y cero ganas de elegir.', quote: 'No sabés qué querés, así que querés todo.', color: '#bb3b7e', profile: { spicy: 60, intensity: 70, social: 90, chill: 45, classic: 45 } }
];
