const FormDataDisplay = ({ formData }) => {
	const handleClick = () => {
		const jsonData = JSON.stringify(formData, null, 2);
		const reversedData = jsonData.split('\n').reverse().join('\n');
		const newWindow = window.open('', '_blank', 'width=300,height=300');
		newWindow.document.write(`<pre>${reversedData}</pre>`);
	};

	return <button onClick={handleClick}>See details</button>;
};

export default FormDataDisplay;
