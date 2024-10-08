import React, { Component } from 'react'
import AllItems from './AllItems';
import GitRepoSort from './GitRepoSort';

const sortRepo = [
    {
        id: 'All',
        text: 'All'
    },
    {
        id: 'JavaScript',
        text: 'JavaScript'
    },
    {
        id: 'Ruby',
        text: 'Ruby'
    },
    {
        id: 'Java',
        text: 'Java'
    },
    {
        id: 'Css',
        text: 'Css'
    }
]

class All extends Component {
    state = {
        repositories: [], 
        activeRepo: sortRepo[0].id,
        isLoading: true, 
        error: null
    }

    componentDidMount() {
        this.getApiData();
    }

    getApiData = async () => {
        this.setState({ isLoading: true, error: null }); 
        const { activeRepo } = this.state;
        try {
            const response = await fetch(`https://apis.ccbp.in/popular-repos?language=${activeRepo}`);
            const data = await response.json();
            const update = data.popular_repos.map(item => ({
                avatarUrl: item.avatar_url,
                forksCount: item.forks_count,
                id: item.id,
                issuesCount: item.issues_count,
                name: item.name,
                starsCount: item.stars_count
            }));
            this.setState({ repositories: update, isLoading: false });
        } catch (error) {
            this.setState({ error: 'Failed to fetch data', isLoading: false });
        }
    }

    updateRepo = (activeRepo) => {
        this.setState({ activeRepo }, this.getApiData);
    }

    render() {
        const { repositories, activeRepo, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div>
                <GitRepoSort activeRepo={activeRepo} sortRepo={sortRepo} updateRepo={this.updateRepo} />

                {
                    repositories.length > 0 ? (
                        repositories.map(item => (
                            <AllItems item={item} key={item.id} />
                        ))
                    ) : (
                        <div>No repositories found</div>
                    )
                }
            </div>
        )
    }
}

export default All;
