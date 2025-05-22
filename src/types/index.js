/**
 * @typedef {object} User
 * @property {string} login
 * @property {number} id
 * @property {string} node_id
 * @property {string} avatar_url
 * @property {string} gravatar_id
 * @property {string} url
 * @property {string} html_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} organizations_url
 * @property {string} repos_url
 * @property {string} events_url
 * @property {string} received_events_url
 * @property {string} type
 * @property {boolean} site_admin
 * @property {string | null} name
 * @property {string | null} company
 * @property {string | null} blog
 * @property {string | null} location
 * @property {string | null} email
 * @property {boolean | null} hireable
 * @property {string | null} bio
 * @property {string | null} twitter_username
 * @property {number} public_repos
 * @property {number} public_gists
 * @property {number} followers
 * @property {number} following
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {object} Repository
 * @property {number} id
 * @property {string} node_id
 * @property {string} name
 * @property {string} full_name
 * @property {boolean} private
 * @property {{ login: string, id: number, avatar_url: string, url: string, html_url: string }} owner
 * @property {string} html_url
 * @property {string | null} description
 * @property {boolean} fork
 * @property {string} url
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} pushed_at
 * @property {string | null} homepage
 * @property {number} size
 * @property {number} stargazers_count
 * @property {number} watchers_count
 * @property {string | null} language
 * @property {number} forks_count
 * @property {number} open_issues_count
 * @property {{ key: string, name: string, url: string } | null} license
 * @property {number} forks
 * @property {number} open_issues
 * @property {number} watchers
 * @property {string} default_branch
 */
