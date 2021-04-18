import {
	EmojiSadIcon,
	UserGroupIcon,
} from '@heroicons/react/outline'
import { BiGroup, BiTired } from "react-icons/bi";
import { SiGhostery, SiGofundme } from "react-icons/si";
import CourseType from '../types/courseType';


const courses: CourseType[] = [
	{
		id: '1',
		name: 'Conociendo la depresión',
		description: 'Conozca cómo ataca al sistema nervioso centrar y afecta el ánimo.',
		fullDescription: 'La depresión es una enfermedad que ataca al sistema nervioso central y afecta el ánimo y la manera de pensar de las personas, existen una serie de factores genéticos y neurotransmisores que intervienen en la depresión, saber cómo actúan en el organismo es necesario para superar el padecimiento',
		icon: EmojiSadIcon,
	},
	{
		id: '2',
		name: 'Ansiedad',
		description: 'la ansiedad surge de una enfermedad que requiere tratamiento.',
		fullDescription: 'La ansiedad puede describirse como un sentimiento de inquietud, nerviosismo, preocupación, temor o pánico por lo que está a punto de ocurrir o puede ocurrir. Mientras que el miedo es la emoción que sentimos en presencia de una amenaza, la ansiedad es una sensación de un peligro, problema o amenaza que está por suceder',
		icon: BiTired,
	},
	{
		id: '3',
		name: 'Fobia social',
		description: 'Por qué las interacciones de todos los días causan muchísima ansiedad?.',
		fullDescription: 'Pero en el trastorno de ansiedad social, también llamado «fobia social», las interacciones de todos los días causan muchísima ansiedad, temor, inseguridad y vergüenza por miedo al escrutinio o la opinión de los demás.',
		icon: BiGroup
	},
	{
		id: '4',
		name: 'Regulación emocional',
		description: 'Conecte su capacidad para manejar las emociones de forma apropiada.',
		fullDescription: 'Según Rafael Bisquerra, la regulación emocional es la capacidad para manejar las emociones de forma apropiada. Supone tomar conciencia de la relación entre emoción, cognición y comportamiento; tener buenas estrategias de afrontamiento; capacidad para autogenerar emociones positivas, etc',
		icon: SiGofundme,
	},
	{
		id: '5',
		name: 'Duelo',
		description: 'Cómo sobrellevar la muerte de un ser querido.',
		fullDescription: 'El duelo es el proceso psicológico que se produce tras una pérdida, una ausencia, una muerte o un abandono. Es diferente para cada persona. Se pueden sufrir diferentes síntomas emocionales y físicos como: ansiedad, miedo, culpa, confusión, negación, depresión, tristeza, shock emocional, etc.',
		icon: SiGhostery
	},
	{
		id: '6',
		name: 'Habilidades sociales',
		description: 'Construya las habilidades que necesita para relacionarse satisfactoriamente en entornos sociales.',
		fullDescription: 'Las habilidades sociales (a veces designadas como competencias sociales) no tienen una definición única y determinada, puesto que existe una confusión conceptual a este respecto, ya que no hay consenso por parte de la comunidad científico-social; sin embargo, esto puede ser definido según sus principales',
		icon: UserGroupIcon,
	},
]

export default courses;