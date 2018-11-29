<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'glfqdcvo_WordPressDB');

/** MySQL database username */
define('DB_USER', 'glfqdcvo_willfrank');

/** MySQL database password */
define('DB_PASSWORD', 'zxc123vbn456');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2l&T+df:C]X|VF=L (vE|InGn(@WVn+bI<Ab@jm E^p:2jGRw?F_:U!8 nXbvWNp');
define('SECURE_AUTH_KEY',  'ZBSio{7(dE}ge(?N.9 M~:aJ/G1}:j;uDvRVOp.N%[!tcNfSBG0Iuww<b_=$Gv8E');
define('LOGGED_IN_KEY',    '^0c|eM#ZW M,^MO<<}2G0YjEhV4xYau@EZqj>efD_9?Gc94W@K(T}(%}/_G.+2+p');
define('NONCE_KEY',        'A2])zZd!+|KtthU2h~0T6Qe|o0N|gns6vbusG>Z WHCd+)Ko;(nc~)36q?~FVd-9');
define('AUTH_SALT',        'JB,@:O!5(;_%*(U1W?qI0b#)8VAW g]l8n0pP55mqMfFT/bj]Efj~3KUk,&X<Hdn');
define('SECURE_AUTH_SALT', 'uRn H.|;L8HKi@woZ1#:W}C>[va-$Bv8uPFcXHQdB1+A!L~ckdS?*!=MBcB/E%~(');
define('LOGGED_IN_SALT',   '}u>`<oyul?r%jHVLTCRI}m1FGnA9A:bp>yD:)WLIW(:g$^1),?A3F:LD``4OufXN');
define('NONCE_SALT',       ',UbAL>4_iqQ 0a=.WlCNkj{+8QQobp[ :{NC!48e0LUFq;dmEx<3r,~dYE/ >t<y');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
