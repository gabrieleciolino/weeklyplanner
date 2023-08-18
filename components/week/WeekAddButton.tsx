import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { add as addWeek } from "@/app/store/weekSlice";
import { IoIosAdd } from 'react-icons/io'
import IconButton from "../ui/IconButton";

interface WeekAddButtonProps {
    variant?: "button" | "icon";
    size?: "small" | "large";
}

export default function WeekAddButton({ variant = "button", size = "large" }: WeekAddButtonProps) {
    const dispatch = useDispatch();

    const handleNewWeek = () => {
        const weekName = prompt("Enter week name");
        const newWeekId = `week-${Date.now()}`;

        dispatch(addWeek({
            id: newWeekId,
            title: weekName ?? 'Default week',
            cells: {}
        }))
    }

    return variant === 'button' ?
        <Button variant="primary" onClick={handleNewWeek} size={size}>Add week</Button> :
        <IconButton onClick={handleNewWeek} icon={<IoIosAdd />} size="large" />
}