import PropTypes from 'prop-types';
import { Code, ExternalLink, Star, GitFork, Eye } from 'lucide-react';

const RepoCard = ({ repo }) => {
    const {
        name,
        html_url,
        description,
        language,
        stargazers_count,
        forks_count,
        watchers_count,
        topics = [],
        visibility
    } = repo;

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Code className="w-4 h-4 text-gray-600" />
                        <h4 className="font-semibold text-gray-900">{name}</h4>
                        {visibility === 'public' && (
                            <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                                Public
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {description || 'No description provided'}
                    </p>
                </div>
                <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                {language && (
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        <span>{language}</span>
                    </div>
                )}
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4 text-gray-400" />
                    <span>{forks_count}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span>{watchers_count}</span>
                </div>
            </div>

            {topics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {topics.slice(0, 3).map((topic) => (
                        <span
                            key={topic}
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors cursor-default"
                        >
                            {topic}
                        </span>
                    ))}
                    {topics.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            +{topics.length - 3}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};


RepoCard.propTypes = {
    repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
        description: PropTypes.string,
        language: PropTypes.string,
        stargazers_count: PropTypes.number.isRequired,
        forks_count: PropTypes.number.isRequired,
        watchers_count: PropTypes.number.isRequired,
        topics: PropTypes.arrayOf(PropTypes.string),
        visibility: PropTypes.string
    }).isRequired
};


RepoCard.defaultProps = {
    repo: {
        description: '',
        language: null,
        topics: [],
        visibility: 'public'
    }
};

export default RepoCard;