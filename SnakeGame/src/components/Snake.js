import { Animated } from "react-native";
import { Coordinate } from "../types";
import { colors } from "../styles/theme";
import {
    BORDER,
    BORDER_RADIUS,
    GAP,
    HEADER_HEIGHT,
    PIXEL,
    SPEED,
} from "../consts";

const Snake = ({ snake, top }) => {
    return (
        <>
        {snake.map((node, index) => {
            const nodeStyle = {
                width: PIXEL,
                height: PIXEL,
                borderWidth: GAP,
            }
        }
        </>
    )
}