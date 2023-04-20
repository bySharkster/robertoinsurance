'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Nosotros" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Tu Dinero en Crecimiento</span> <br />
        <span className="font-extrabold text-white">Te Ayudamos a Asegurar y Proteger el Futuro de tu Familia</span><br /><br /> Nos enfocamos en asegurar su  <span className="font-extrabold text-white ">bienestar personal financiero</span> {' '}y de vida. Brindando consultas sobre {' '}
        <span className="font-extrabold text-white">anualidades, seguros de vida, incapacidad, cáncer y funeral.
        </span>{' '}<span className="font-extrabold text-white">Exploremos</span> la variedad de serivicios a continuacion.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
