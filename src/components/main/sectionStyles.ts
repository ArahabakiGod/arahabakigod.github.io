export const LEFT_SECTION_STYLES = {
    base: "mb-4 2xl:mb-0 2xl:mr-8 2xl:w-48 2xl:min-w-48",
    textAlign: "text-center 2xl:text-left",
} as const;

export const RIGHT_SECTION_STYLES = {
    base: "w-[100%] items-center flex flex-col justify-between",
    border: "border-accent pt-8 border-0 border-t-2 2xl:p-0 2xl:pl-12 2xl:border-l-2 2xl:border-t-0"
} as const;

export const MAIN_SECTION_STYLES = {
    base: "my-4 py-8 mx-4 p-2 flex border-border flex-col",
    responsive: "2xl:flex-row",
    bottomBorder: "border-b-3",
    alignment: "items-center",
} as const;

export const SECTION_ACTIONS_STYLES = {
    base: "flex justify-center 2xl:justify-start",
    singleButton: "flex justify-center 2xl:justify-start",
    multipleButtons: "flex justify-between flex-col gap-4 2xl:flex-row 2xl:gap-0 w-full",
    spacing: "mb-8"
} as const;

export const SECTION_COMBINATIONS = {
    leftText: `${LEFT_SECTION_STYLES.base} ${LEFT_SECTION_STYLES.textAlign}`,

    rightContent: `${RIGHT_SECTION_STYLES.base} ${RIGHT_SECTION_STYLES.border}`,

    mainWithBorder: `${MAIN_SECTION_STYLES.base} ${MAIN_SECTION_STYLES.responsive} ${MAIN_SECTION_STYLES.alignment} ${MAIN_SECTION_STYLES.bottomBorder}`,

    mainNoBorder: `${MAIN_SECTION_STYLES.base} ${MAIN_SECTION_STYLES.responsive} ${MAIN_SECTION_STYLES.alignment}`
} as const;

export const getSectionStyles = {
    left: (customClasses = "") => `${SECTION_COMBINATIONS.leftText} ${customClasses}`.trim(),
    right: (customClasses = "") => `${SECTION_COMBINATIONS.rightContent} ${customClasses}`.trim(),
    main: (withBorder = true) => {
        const baseStyles = withBorder ? SECTION_COMBINATIONS.mainWithBorder : SECTION_COMBINATIONS.mainNoBorder;
        return baseStyles;
    },

    actions: (variant: keyof typeof SECTION_ACTIONS_STYLES = 'singleButton', customClasses = "") =>
        `${SECTION_ACTIONS_STYLES[variant]} ${customClasses}`.trim()
};