import {useSpring, animated } from "react-spring";

export const useAnimations = () => {
    const bounceInLeft = useSpring({
        from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
        to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    });

    return {
        bounceInLeft: bounceInLeft
    };
};