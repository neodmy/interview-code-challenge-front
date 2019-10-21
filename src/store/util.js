export const updateObject = (prevObject, props) => {
    return {
        ...prevObject,
        ...props
    };
};