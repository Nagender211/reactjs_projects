const GitRepoSort = (props) => {
    const { sortRepo, activeRepo, updateRepo } = props;
    
    const onUpdateRepo = (e, id) => {
        updateRepo(id);  // Pass the selected repo id
    };

    return (
        <div>
            <ul>
                {sortRepo.map(item => (
                    <li 
                        key={item.id} 
                        onClick={(e) => onUpdateRepo(e, item.id)} 
                        style={{ fontWeight: activeRepo === item.id ? 'bold' : 'normal' }} // Highlight active item
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GitRepoSort;
