let ClockTimer = () => {
    let date = new Date();
    return <>
    <p className="lead">Current Time in Bharat is  :{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
    </>;
}

export default ClockTimer;