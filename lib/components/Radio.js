'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var Radio = createReactClass({
	displayName: 'Radio',

	propTypes: {
		className: PropTypes.string,
		disabled: PropTypes.bool,
		inline: PropTypes.bool,
		label: PropTypes.string
	},
	render: function render() {
		var componentClass = classNames('Radio', {
			'Radio--disabled': this.props.disabled,
			'Radio--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label');

		return React.createElement(
			'label',
			{ className: componentClass },
			React.createElement('input', _extends({ type: 'radio', className: 'Radio__input' }, props)),
			this.props.label && React.createElement(
				'span',
				{ className: 'Radio__label' },
				this.props.label
			)
		);
	}
});

module.exports = Radio;
