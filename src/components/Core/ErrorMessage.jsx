const ErrorMessage = ({listItem}) => {
    return (
        <>
        {
            listItem['length'] === 0 && <h3 className="text-center">You have an empty list</h3>
        }
        </>
    );
}

export default ErrorMessage;