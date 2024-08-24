
const ErrorMessage = ({listItem=[], message=null}) => {
    

    if(message == null) {
        message = "You have an empty list";
    }
    return (
        <>
        {

            listItem['length'] === 0 && <h3 className="text-center">{message}</h3>
        }
        
        </>
    );
}

export default ErrorMessage;