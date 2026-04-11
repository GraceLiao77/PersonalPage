import { motion } from 'framer-motion';
import './Hero.css';
import avatarImg from '../../static/img/new-avatar.jpeg';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
      opacity: { duration: 0.5 },
    },
  },
};

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <motion.p
            className="greeting"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm
          </motion.p>

          <div className="hero-name-wrap">
            <motion.svg
              viewBox="0 0 520 140"
              className="hero-name-circle"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M 470 35
                   C 530 95, 450 125, 260 128
                   C 70 128, 20 100, 20 70
                   C 20 30, 90 12, 260 12
                   C 430 12, 490 55, 470 35"
                fill="none"
                strokeWidth="7"
                stroke="var(--border)"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
              />
            </motion.svg>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Grace
            </motion.h1>
          </div>

          <motion.h2
            className="subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Front-End Engineer &amp; M.Eng Student
          </motion.h2>

          <motion.p
            className="bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Master of Engineering student at the University of Auckland. Previously 4 years as a
            front-end engineer at TikTok — building large-scale systems, optimising performance, and
            mentoring junior devs.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="avatar-ring">
            <img src={avatarImg} alt="Grace Liao" className="avatar-img" />
          </div>
          <motion.div
            className="status-badge"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <span className="dot"></span>
            Open to opportunities
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
