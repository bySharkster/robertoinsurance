'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| ¿Quiénes Somos?" textStyles="text-center" />
      <TitleText
        title={(
          <>Asesoría de Anualidades, Seguros de Vida y Seguros de Incapacidad
          </>
        )}
        textStyles="text-center"
      />
      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <p><br />  Somos un grupo de Representantes Autorizados bajo el comisionado de Seguros de Puerto Rico comprometidos en ofrecerle los mejores productos en Anualidades y Seguros de vida, incapacidad, cáncer y funeral para el crecimiento de su dinero de una manera segura (con su principal garantizado) y a la vez proveer las mejores herramientas para la protección de activos en caso de una muerte o incapacidad inesperada. <br /><br />Nos destacamos por mantener{' '}<span className="font-extrabold text-white">seriedad, integridad, experiencia y compromiso total.</span>
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
