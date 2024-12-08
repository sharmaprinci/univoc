// src/components/ui/RadioGroup.jsx

const RadioGroup = ({ children, className }) => {
    return (
        <div className={`radio-group ${className}`}>
            {children}
        </div>
    );
};

export default RadioGroup;
