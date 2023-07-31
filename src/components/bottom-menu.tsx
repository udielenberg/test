import { Text } from "./text";

const sentences = [
    "באמת המוחלטת",
    "Aho Mitakuye Oyasin",
    "Om Tat Sat",
    "הכל מחובר",
];

export const DesktopBottomMenu = () => {
    return sentences.map((text) => <Text key={text} value={text} />);
};
