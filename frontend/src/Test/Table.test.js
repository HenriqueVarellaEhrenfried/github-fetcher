import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../Components/Table';


const item = {
    archive_url:"https://api.github.com/repos/rails/rails/{archive_format}{/ref}",
    archived:false,
    assignees_url:"https://api.github.com/repos/rails/rails/assignees{/user}",
    blobs_url:"https://api.github.com/repos/rails/rails/git/blobs{/sha}",
    branches_url:"https://api.github.com/repos/rails/rails/branches{/branch}",
    clone_url:"https://github.com/rails/rails.git",
    collaborators_url:"https://api.github.com/repos/rails/rails/collaborators{/collaborator}",
    comments_url:"https://api.github.com/repos/rails/rails/comments{/number}",
    commits_url:"https://api.github.com/repos/rails/rails/commits{/sha}",
    compare_url:"https://api.github.com/repos/rails/rails/compare/{base}...{head}",
    contents_url:"https://api.github.com/repos/rails/rails/contents/{+path}",
    contributors_url:"https://api.github.com/repos/rails/rails/contributors",
    created_at:"2008-04-11T02:19:47Z",
    default_branch:"master",
    deployments_url:"https://api.github.com/repos/rails/rails/deployments",
    description:"Ruby on Rails",
    downloads_url:"https://api.github.com/repos/rails/rails/downloads",
    events_url:"https://api.github.com/repos/rails/rails/events",
    fork:false,
    forks:16059,
    forks_count:16059,
    forks_url:"https://api.github.com/repos/rails/rails/forks",
    full_name:"rails/rails",
    git_commits_url:"https://api.github.com/repos/rails/rails/git/commits{/sha}",
    git_refs_url:"https://api.github.com/repos/rails/rails/git/refs{/sha}",
    git_tags_url:"https://api.github.com/repos/rails/rails/git/tags{/sha}",
    git_url:"git://github.com/rails/rails.git",
    has_downloads:true,
    has_issues:true,
    has_pages:false,
    has_projects:true,
    has_wiki:false,
    homepage:"http://rubyonrails.org",
    hooks_url:"https://api.github.com/repos/rails/rails/hooks",
    html_url:"https://github.com/rails/rails",
    id:8514,
    issue_comment_url:"https://api.github.com/repos/rails/rails/issues/comments{/number}",
    issue_events_url:"https://api.github.com/repos/rails/rails/issues/events{/number}",
    issues_url:"https://api.github.com/repos/rails/rails/issues{/number}",
    keys_url:"https://api.github.com/repos/rails/rails/keys{/key_id}",
    labels_url:"https://api.github.com/repos/rails/rails/labels{/name}",
    language:"Ruby",
    languages_url:"https://api.github.com/repos/rails/rails/languages",
    license:{key: "mit", name: "MIT License", spdx_id: "MIT", url: "https://api.github.com/licenses/mit"},
    merges_url:"https://api.github.com/repos/rails/rails/merges",
    milestones_url:"https://api.github.com/repos/rails/rails/milestones{/number}",
    mirror_url:null,
    name:"rails",
    notifications_url:"https://api.github.com/repos/rails/rails/notifications{?since,all,participating}",
    open_issues:1099,
    open_issues_count:1099,
    owner:{login: "rails", id: 4223, avatar_url: "https://avatars1.githubusercontent.com/u/4223?v=4", gravatar_id: "", url: "https://api.github.com/users/rails",},
    private:false,
    pulls_url:"https://api.github.com/repos/rails/rails/pulls{/number}",
    pushed_at:"2018-05-23T18:10:44Z",
    releases_url:"https://api.github.com/repos/rails/rails/releases{/id}",
    score:1,
    size:164031,
    ssh_url:"git@github.com:rails/rails.git",
    stargazers_count:39713,
    stargazers_url:"https://api.github.com/repos/rails/rails/stargazers",
    statuses_url:"https://api.github.com/repos/rails/rails/statuses/{sha}",
    subscribers_url:"https://api.github.com/repos/rails/rails/subscribers",
    subscription_url:"https://api.github.com/repos/rails/rails/subscription",
    svn_url:"https://github.com/rails/rails",
    tags_url:"https://api.github.com/repos/rails/rails/tags",
    teams_url:"https://api.github.com/repos/rails/rails/teams",
    trees_url:"https://api.github.com/repos/rails/rails/git/trees{/sha}",
    updated_at:"2018-05-23T18:47:16Z",
    url:"https://api.github.com/repos/rails/rails",
    watchers:39713,
    watchers_count:39713
};
let rep_info = {}
        rep_info['body'] = [
            ['Name', item.name ? item.name : ''],
            ['Created at',item.created_at ? item.created_at : ''], 
            ['Number of forks', item.forks_count ? item.forks_count : ''],
            ['Language', item.language ? item.language : ''],
            ['License', item.license ?  item.license.name ? item.license.name : 'No License' : 'No License'],
            ['Number of issues open', item.open_issues_count ? item.open_issues_count : ''], 
            ['URL', item.html_url ? item.html_url : ''],
            ['Last push', item.pushed_at ? item.pushed_at : ''],
            ['Number of stargazers', item.stargazers_count ? item.stargazers_count : ''],
            ['Number of watchers', item.watchers_count ? item.watchers_count : ''],
            ['Owner login', item.owner.login ? item.owner.login : ''],
            ['Owner URL', item.owner.html_url ? item.owner.html_url : '']
        ]

it('renders without crashing', () => {
    const div = document.createElement('div');
    div.className - "repository-wrapper"
    ReactDOM.render(<Table body={rep_info} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

