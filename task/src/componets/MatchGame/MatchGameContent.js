import React from 'react';

const MatchGameContent = (props) => {
    const { eachFilter, onUpdatePhoto } = props;
    const { imgUrl, catagery } = eachFilter;

    const updateThePhoto = () => {
        onUpdatePhoto(imgUrl);  // Pass the image URL to update the main image
    };

    return (
        <div>
            <img
                src={imgUrl}
                alt={catagery}
                onClick={updateThePhoto}
                style={{ display: 'flex', height: '100px', width: '100px', justifyContent: 'center', alignItems: 'center' }}
            />
        </div>
    );
};

export default MatchGameContent;
