import { useEffect } from 'react';
import PropTypes from 'prop-types';

const CustomDialog = ({
                          isOpen,
                          onClose,
                          title,
                          message,
                          type = 'info',
                          confirmText = 'OK',
                          cancelText = 'Cancel',
                          onConfirm,
                          showCancel = false
                      }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                );
            case 'error':
                return (
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                );
            case 'warning':
                return (
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                );
        }
    };

    const getButtonColor = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500 hover:bg-green-600 focus:ring-green-500';
            case 'error':
                return 'bg-red-500 hover:bg-red-600 focus:ring-red-500';
            case 'warning':
                return 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500';
            default:
                return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500';
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white/10 border border-white/20 rounded-2xl max-w-md w-full p-6 shadow-xl backdrop-blur-sm transform transition-all">
                    {/* Icon */}
                    {getIcon()}

                    {/* Title */}
                    {title && (
                        <h3 className="text-lg font-semibold text-white text-center mb-2">
                            {title}
                        </h3>
                    )}

                    {/* Message */}
                    <p className="text-gray-300 text-center mb-6">
                        {message}
                    </p>

                    {/* Actions */}
                    <div className={`flex ${showCancel ? 'space-x-3' : 'justify-center'}`}>
                        {showCancel && (
                            <button
                                onClick={onClose}
                                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                            >
                                {cancelText}
                            </button>
                        )}
                        <button
                            onClick={onConfirm || onClose}
                            className={`flex-1 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${getButtonColor()}`}
                        >
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CustomDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    onConfirm: PropTypes.func,
    showCancel: PropTypes.bool
};

export default CustomDialog;