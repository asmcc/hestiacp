export const options = [
	{
		flag: 'port',
		label: 'Port',
		description: 'Change the port Hestia uses.',
		type: 'text',
		default: '8083',
	},
	{
		flag: 'lang',
		label: 'Language',
		description: 'Change the ISO 639-1 language code.',
		type: 'select',
		default: 'en',
		options: [
			{ label: 'Albanian', value: 'sq' },
			{ label: 'Arabic', value: 'ar' },
			{ label: 'Armenian', value: 'hy' },
			{ label: 'Azerbaijani', value: 'az' },
			{ label: 'Bengali', value: 'bn' },
			{ label: 'Bosnian', value: 'bs' },
			{ label: 'Bulgarian', value: 'bg' },
			{ label: 'Catalan', value: 'ca' },
			{ label: 'Croatian', value: 'hr' },
			{ label: 'Czech', value: 'cs' },
			{ label: 'Danish', value: 'da' },
			{ label: 'Dutch', value: 'nl' },
			{ label: 'English', value: 'en' },
			{ label: 'Finnish', value: 'fi' },
			{ label: 'French', value: 'fr' },
			{ label: 'Georgian', value: 'ka' },
			{ label: 'German', value: 'de' },
			{ label: 'Greek', value: 'el' },
			{ label: 'Hungarian', value: 'hu' },
			{ label: 'Indonesian', value: 'id' },
			{ label: 'Italian', value: 'it' },
			{ label: 'Japanese', value: 'ja' },
			{ label: 'Korean', value: 'ko' },
			{ label: 'Kurdish Sorani', value: 'ku' },
			{ label: 'Norwegian', value: 'no' },
			{ label: 'Persian', value: 'fa' },
			{ label: 'Polish', value: 'pl' },
			{ label: 'Portuguese', value: 'pt' },
			{ label: 'Portuguese (Brasil)', value: 'pt-br' },
			{ label: 'Romanian', value: 'ro' },
			{ label: 'Russian', value: 'ru' },
			{ label: 'Serbian', value: 'sr' },
			{ label: 'Simplified Chinese (China)', value: 'zh-cn' },
			{ label: 'Slovak', value: 'sk' },
			{ label: 'Spanish', value: 'es' },
			{ label: 'Swedish', value: 'sv' },
			{ label: 'Thai', value: 'th' },
			{ label: 'Traditional Chinese (Taiwan)', value: 'zh-tw' },
			{ label: 'Turkish', value: 'tr' },
			{ label: 'Ukrainian', value: 'uk' },
			{ label: 'Urdu', value: 'ur' },
			{ label: 'Vietnamese', value: 'vi' },
		],
	},
	{
		flag: 'hostname',
		label: 'Hostname',
		description: 'Set a custom hostname.',
		type: 'text',
		default: '',
	},
	{
		flag: 'email',
		label: 'Email',
		description: 'Set the admin account email.',
		type: 'text',
		default: '',
	},
	{
		flag: 'password',
		label: 'Password',
		description: 'Set the admin account password.',
		type: 'text',
		default: '',
	},
	{
		flag: 'apache',
		label: 'Apache',
		description: 'Web server with htaccess support.',
		default: 'yes',
	},
	{
		flag: 'phpfpm',
		label: 'PHP-FPM',
		description: 'Process manager for executing PHP scripts.',
		default: 'no',
	},
	{
		flag: 'multiphp',
		label: 'MultiPHP',
		description: 'Allows installing multiple PHP versions.',
		default: 'yes',
	},
	{
		flag: 'vsftpd',
		label: 'VSFTPD',
		description: 'Lightweight, minimalist and secure FTP server.',
		default: 'yes',
	},
	{
		flag: 'proftpd',
		label: 'ProFTPD',
		description: 'Advanced, modular FTP server that supports LDAP.',
		default: 'no',
	},
	{
		flag: 'named',
		label: 'BIND',
		description: 'Custom DNS name server.',
		default: 'yes',
	},
	{
		flag: 'mysql',
		label: 'MariaDB',
		description: 'Fork of MySQL with additional features and improvements.',
		default: 'yes',
	},
	{
		flag: 'mysql8',
		label: 'MySQL 8',
		description: 'Open-source relational database management system.',
		default: 'no',
	},
	{
		flag: 'postgresql',
		label: 'PostgreSQL',
		description: 'Open-source relational database management system.',
		default: 'no',
	},
	{
		flag: 'exim',
		label: 'Exim',
		description: 'Allows sending emails from web-mail or via SMTP.',
		default: 'yes',
	},
	{
		flag: 'dovecot',
		label: 'Dovecot',
		description: 'Receive emails and connect with email clients via IMAP/POP3.',
		default: 'yes',
	},
	{
		flag: 'sieve',
		label: 'Sieve',
		description: 'Language for managing your own custom email filters.',
		default: 'no',
	},
	{
		flag: 'clamav',
		label: 'ClamAV',
		description: 'Scans your email inbox for viruses.',
		default: 'yes',
	},
	{
		flag: 'spamassassin',
		label: 'SpamAssassin',
		description: 'Filter out spam emails from your inbox.',
		default: 'yes',
	},
	{
		flag: 'iptables',
		label: 'iptables',
		description: 'Allows firewall rule management within Hestia.',
		default: 'yes',
	},
	{
		flag: 'fail2ban',
		label: 'Fail2Ban',
		description: 'Provides brute force protection for SSH, email, FTP and databases.',
		default: 'yes',
	},
	{
		flag: 'quota',
		label: 'Filesystem quota',
		description: 'Use hard disk space limits on user packages.',
		default: 'no',
	},
	{
		flag: 'api',
		label: 'Hestia API',
		description: "Enable Hestia's internal API.",
		default: 'yes',
	},
	{
		flag: 'interactive',
		label: 'Interactive install',
		description: 'Enable interactive install.',
		default: 'yes',
	},
	{
		flag: 'force',
		label: 'Force installation',
		description: 'Force the installation.',
		default: 'no',
	},
];
