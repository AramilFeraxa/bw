import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./Counter.module.css";

export default function Counter({ end = 100, duration = 2, className = "" }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <span ref={ref} className={`${styles.countText} ${className}`}>
            {inView ? <CountUp end={Number(end)} duration={duration} /> : 0}
        </span>
    );
}
