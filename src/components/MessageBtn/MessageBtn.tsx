import styles from "./MessageBtn.module.css";

interface MessageBtnProps {
    additionalClassNames?: string;
}

function MessageBtn({ additionalClassNames = "" }: MessageBtnProps) {
    return (
        <button className={`${styles.messageBtn} ${additionalClassNames}`}>Message</button>
    )
}

export default MessageBtn;