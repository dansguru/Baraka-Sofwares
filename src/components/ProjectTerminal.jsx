import { Terminal, Cpu, Sparkles, Send, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from "react";

const ProjectTerminal = () => {
    const [commands, setCommands] = useState([
        { text: 'Welcome to Project Builder v2.1', type: 'system' },
        { text: 'Type "help" for commands', type: 'system' },
        { text: '✓ System ready', type: 'success' }
    ]);
    const [input, setInput] = useState('');
    const [isBuilding, setIsBuilding] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [buildProgress, setBuildProgress] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const terminalEndRef = useRef(null);
    const terminalContainerRef = useRef(null);
    const inputRef = useRef(null);

    const availableCommands = [
        { cmd: 'help', desc: 'Show commands' },
        { cmd: 'build saas', desc: 'SaaS application' },
        { cmd: 'build webapp', desc: 'Web application' },
        { cmd: 'build mobile', desc: 'Mobile app' },
        { cmd: 'build landing', desc: 'Landing page' },
        { cmd: 'build ecommerce', desc: 'E-commerce' },
        { cmd: 'clear', desc: 'Clear terminal' },
        { cmd: 'status', desc: 'System status' },
        { cmd: 'ls', desc: 'List projects' }
    ];

    const projectTemplates = {
        'build saas': {
            name: 'SaaS Application',
            description: 'Full-featured SaaS platform',
            tech: ['React', 'Node.js', 'PostgreSQL'],
            time: '4-6 weeks',
            price: '$15K - $25K'
        },
        'build webapp': {
            name: 'Web Application',
            description: 'Custom web app',
            tech: ['React/Next.js', 'TypeScript'],
            time: '3-5 weeks',
            price: '$8K - $15K'
        },
        'build mobile': {
            name: 'Mobile App',
            description: 'iOS & Android app',
            tech: ['React Native', 'Firebase'],
            time: '6-8 weeks',
            price: '$20K - $35K'
        },
        'build landing': {
            name: 'Landing Page',
            description: 'High-converting landing page',
            tech: ['Next.js', 'Tailwind'],
            time: '1-2 weeks',
            price: '$1.5K - $3K'
        },
        'build ecommerce': {
            name: 'E-commerce',
            description: 'Online store',
            tech: ['Next.js', 'Stripe'],
            time: '5-7 weeks',
            price: '$12K - $20K'
        }
    };

    const scrollToBottom = () => {
        if (!terminalContainerRef.current) return;

        const container = terminalContainerRef.current;
        const isNearBottom = container.scrollHeight - container.clientHeight - container.scrollTop < 100;

        if (isNearBottom) {
            terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            scrollToBottom();
        }, 100);

        return () => clearTimeout(timeout);
    }, [commands, showResult]);

    useEffect(() => {
        if (isBuilding) {
            const interval = setInterval(() => {
                setBuildProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            setIsBuilding(false);
                            setShowResult(true);
                            scrollToBottom();
                        }, 500);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isBuilding]);

    const handleCommand = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setCommands(prev => [...prev, { text: `$ ${input}`, type: 'user' }]);
        const cmd = input.toLowerCase();

        if (cmd === 'help') {
            const helpText = ['Commands:'];
            availableCommands.forEach(({ cmd, desc }) => {
                helpText.push(`  ${cmd.padEnd(12)} ${desc}`);
            });
            setCommands(prev => [...prev, { text: helpText.join('\n'), type: 'system' }]);
        }
        else if (cmd === 'clear') {
            setCommands([]);
        }
        else if (cmd === 'status') {
            setCommands(prev => [...prev,
                { text: 'Status: ONLINE', type: 'success' },
                { text: 'Build: READY', type: 'success' }
            ]);
        }
        else if (cmd === 'ls') {
            setCommands(prev => [...prev,
                { text: 'Templates:', type: 'system' },
                { text: '  saas      - SaaS app', type: 'info' },
                { text: '  webapp    - Web app', type: 'info' },
                { text: '  mobile    - Mobile app', type: 'info' },
                { text: '  landing   - Landing page', type: 'info' },
                { text: '  ecommerce - E-commerce', type: 'info' },
                { text: 'Use "build [template]"', type: 'system' }
            ]);
        }
        else if (projectTemplates[cmd]) {
            setCurrentProject(projectTemplates[cmd]);
            setIsBuilding(true);
            setBuildProgress(0);
            setShowResult(false);
            setCommands(prev => [...prev,
                { text: `Building: ${projectTemplates[cmd].name}`, type: 'system' }
            ]);
        }
        else {
            setCommands(prev => [...prev,
                { text: `Command not found: ${input}`, type: 'error' },
                { text: 'Type "help" for commands', type: 'system' }
            ]);
        }

        setInput('');


        setTimeout(() => {
            inputRef.current?.focus();
            scrollToBottom();
        }, 10);
    };

    const resetTerminal = () => {
        setCommands([
            { text: 'Terminal reset', type: 'system' },
            { text: '✓ System ready', type: 'success' }
        ]);
        setCurrentProject(null);
        setShowResult(false);
        setIsBuilding(false);
        setBuildProgress(0);
    };

    const getCommandStyle = (type) => {
        switch(type) {
            case 'user': return 'text-green-600';
            case 'system': return 'text-blue-600';
            case 'success': return 'text-green-700 font-semibold';
            case 'error': return 'text-red-600';
            case 'info': return 'text-cyan-600';
            default: return 'text-gray-700';
        }
    };

    return (
        <div className="h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <Terminal className="w-4 h-4 text-green-400" />
                    <span className="text-gray-200 text-sm font-mono">builder</span>
                </div>
                <button
                    onClick={resetTerminal}
                    className="p-1 rounded hover:bg-gray-700 transition-colors"
                    title="Reset"
                >
                    <RotateCcw className="w-4 h-4 text-gray-300" />
                </button>
            </div>

            {/* Terminal Content */}
            <div
                ref={terminalContainerRef}
                className="flex-1 p-4 bg-white overflow-y-auto"
                style={{ scrollBehavior: 'smooth' }}
            >
                <div className="font-mono text-xs space-y-1">
                    {commands.map((command, index) => (
                        <div key={index} className={getCommandStyle(command.type)}>
                            {command.text}
                        </div>
                    ))}
                </div>

                {isBuilding && (
                    <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200">
                        <div className="flex items-center space-x-2 mb-2">
                            <Cpu className="w-4 h-4 text-cyan-500 animate-spin" />
                            <span className="text-sm font-medium">Building...</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                                className="bg-gradient-to-r from-green-500 to-blue-500 h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${buildProgress}%` }}
                            ></div>
                        </div>
                        <div className="text-right text-xs text-gray-500 mt-1">
                            {buildProgress}%
                        </div>
                    </div>
                )}

                {showResult && currentProject && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-white rounded border border-gray-300">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-1">
                                <Sparkles className="w-4 h-4 text-yellow-500" />
                                <span className="font-bold text-gray-900">READY!</span>
                            </div>
                            <div className="text-xs text-green-600 font-mono">SUCCESS</div>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <div className="text-xs text-gray-500">PROJECT</div>
                                <div className="font-bold text-gray-900">{currentProject.name}</div>
                                <div className="text-sm text-gray-600">{currentProject.description}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-2">
                                <div className="text-xs">
                                    <div className="text-gray-500">TECH</div>
                                    <div className="font-medium text-gray-900">
                                        {currentProject.tech.slice(0, 2).join(', ')}
                                    </div>
                                </div>
                                <div className="text-xs">
                                    <div className="text-gray-500">TIME</div>
                                    <div className="font-medium text-gray-900">{currentProject.time}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={terminalEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t bg-white">
                <form onSubmit={handleCommand} className="flex items-center space-x-2">
                    <div className="text-green-600 font-mono text-sm">$</div>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-gray-900 font-mono text-sm"
                        placeholder="Type command..."
                        disabled={isBuilding}
                        autoFocus
                    />
                    <button
                        type="submit"
                        disabled={isBuilding}
                        className="p-1.5 rounded bg-green-600 hover:bg-green-700 disabled:opacity-50 transition-colors"
                    >
                        <Send className="w-3 h-3 text-white" />
                    </button>
                </form>
                <div className="text-xs text-gray-500 mt-2">
                    Try: <span className="text-blue-600 cursor-pointer hover:text-blue-700" onClick={() => setInput('help')}>help</span>,
                    <span className="text-blue-600 cursor-pointer hover:text-blue-700 ml-2" onClick={() => setInput('ls')}>ls</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectTerminal;