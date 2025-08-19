import { 
    PiListBulletsBold,
    PiHouseBold,
    PiBookBold,
    PiBookmarkSimpleFill,
    PiArrowLeftBold,
    PiClockBold,
    PiSpinnerBold,
    PiUserBold

 } from "react-icons/pi";


const iconMap = {
    // Phosphor Icons
    'list-bullets': PiListBulletsBold,
    'home': PiHouseBold,
    'book': PiBookBold,
    'bookmark-fill': PiBookmarkSimpleFill,
    'arrow-left': PiArrowLeftBold,
    'clock': PiClockBold,
    'spinner': PiSpinnerBold,
    'user': PiUserBold,

};

export default function Icon({ name, size = 24, color, className, ...props }) {
    const IconComponent = iconMap[name];
    
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    
    return (
        <IconComponent 
            size={size}
            color={color}
            className={className}
            {...props}
        />
    );
}