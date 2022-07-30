import { useEffect, useState } from 'react';

function Message({ count, size }) {
    const [currentClass, setClassName] = useState('small');

    useEffect(() => {

        let className = "";
        switch(size) {
          case 'm':
            className = 'medium';
            break;
          case 'l':
            className = 'large';
            break;
          case 'xl':
            className = 'xlarge';
            break;
          default:
            className = 'small';
            break;
        }

        setClassName(className);
      }, [size]);

    if (count > 0) {
        return (
            <div className={`message ${currentClass}`}>
                Your bird has {count} feathers!
            </div>
        );
    }

    return (
        <div className={`message ${currentClass}`}>
            (Oh my! Your bird is naked!)
        </div>
    );
};

export default Message;
