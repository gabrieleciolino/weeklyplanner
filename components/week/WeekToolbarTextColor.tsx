import { IoMdColorPalette } from "react-icons/io";
import Button from "../ui/Button";
import Popover from "../ui/Popover";
import Color from "../ui/Color";
import IconButton from "../ui/IconButton";

interface WeekToolbarTextColorProps {
    selectedCells: string[];
    handleClick: (color: string) => void;
}

export default function WeekToolbarTextColor({ selectedCells, handleClick }: WeekToolbarTextColorProps) {
    return (
        <Popover trigger={
            <IconButton icon={<IoMdColorPalette />} label="Text" />
        }>
            <div className="bg-purple shadow rounded-md my-4 p-4">
                <div className="flex gap-2">
                    <Color color="#333333" onClick={() => handleClick('#333333')} />
                    <Color color="#555555" onClick={() => handleClick('#555555')} />
                    <Color color="#4B4B4B" onClick={() => handleClick('#4B4B4B')} />
                    <Color color="#4E2C00" onClick={() => handleClick('#4E2C00')} />
                    <Color color="#001F4D" onClick={() => handleClick('#001F4D')} />

                    <Color color="#004D26" onClick={() => handleClick('#004D26')} />
                    <Color color="#4D0019" onClick={() => handleClick('#4D0019')} />
                    <Color color="#330033" onClick={() => handleClick('#330033')} />
                    <Color color="#000000" onClick={() => handleClick('#000000')} />
                    <Color color="#FFFFFF" onClick={() => handleClick('#FFFFFF')} />
                </div>
            </div>
        </Popover>
    )
}