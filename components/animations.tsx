'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

// Animation variants
const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Base props for animation components
interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

// FadeIn Component
export function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// FadeInUp Component
export function FadeInUp({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// FadeInLeft Component
export function FadeInLeft({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// FadeInRight Component
export function FadeInRight({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, x: 30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ScaleIn Component
export function ScaleIn({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container for lists/grids
interface StaggerContainerProps extends AnimationProps {
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item (use inside StaggerContainer)
export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Hero Text Animation (for hero sections)
export function HeroText({
  children,
  className = '',
  delay = 0,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Image Reveal Animation
export function ImageReveal({
  children,
  className = '',
  delay = 0,
  once = true,
  amount = 0.3,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, scale: 1.05 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Card Hover Animation wrapper
export function CardHover({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Section wrapper with fade
export function AnimatedSection({
  children,
  className = '',
  once = true,
  amount = 0.2,
}: AnimationProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

// Export motion for direct use
export { motion };
