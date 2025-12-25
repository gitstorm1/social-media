import styles from "./PeoplesSection.module.css";

import { type PeoplesSectionData } from "../../../../types.d.tsx";

import PeopleSuggestionCard from "./PeopleSuggestionCard.tsx";

function PeoplesSection({ suggestionsList }: PeoplesSectionData) {
    return (
        <>
            <div className={styles.peoplesSection}>
                <h3 className={styles.title}>People you may know</h3>

                <div className={styles.listContainer}>
                    {suggestionsList.map((suggestion) => (
                        <PeopleSuggestionCard
                            key={suggestion.user.id}
                            {...suggestion}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PeoplesSection;