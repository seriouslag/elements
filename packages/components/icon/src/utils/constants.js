import { constants } from '@tradeshift/elements';

const { colors, colorModifiers } = constants;

export const types = {
	DEFAULT: 'default',
	INVERTED: 'inverted',
	PRIMARY: 'primary',
	DANGER: 'danger',
	ERROR: 'error',
	SUCCESS: 'success',
	ACTIVE: 'active',
	INFO: 'info',
	FOCUS: 'focus',
	WARNING: 'warning',
	DISABLED: 'disabled',
	DISABLED_CHECKED: 'disabled-checked',
	SUGGESTED: 'suggested',
	SLATE_LIGHTEST: 'slate-lightest',
	ACTION_GRAY: 'action-gray',
	ACTION_BLUE: 'action-blue',
	ACTION_INVERTED: 'action-inverted'
};

export const typeColors = {
	[types.DEFAULT]: colors.SLATE,
	[types.INVERTED]: colors.WHITE,
	[types.DANGER]: colors.RED,
	[types.ERROR]: colors.RED,
	[types.SUCCESS]: colors.GREEN,
	[types.PRIMARY]: colors.BLUE,
	[types.ACTIVE]: colors.BLUE,
	[types.INFO]: colors.BLUE,
	[types.FOCUS]: colors.BLUE,
	[types.WARNING]: colors.ORANGE,
	[types.DISABLED]: colors.GRAY + colorModifiers.LIGHTER,
	[types.SUGGESTED]: colors.PURPLE,
	[types.DISABLED_CHECKED]: colors.GRAY + colorModifiers.LIGHT,
	[types.SLATE_LIGHTEST]: colors.SLATE + colorModifiers.LIGHTEST,
	[types.ACTION_GRAY]: colors.GRAY + colorModifiers.DARKER,
	[types.ACTION_BLUE]: colors.BLUE,
	[types.ACTION_INVERTED]: colors.WHITE
};

export const sizes = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large'
};
