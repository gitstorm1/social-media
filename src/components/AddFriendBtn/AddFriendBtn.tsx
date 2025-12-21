import styles from "./AddFriendBtn.module.css";

interface AddFriendBtnProps {
    additionalClassNames?: string;
}

function AddFriendBtn({ additionalClassNames = "" }: AddFriendBtnProps) {
    return (
        <button className={`${styles.addFriendBtn} ${additionalClassNames}`}>Add friend</button>
    )
}

export default AddFriendBtn;