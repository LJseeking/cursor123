// 课程数据
const courses = [
    {
        title: 'AI助手使用教程 2024全新教程',
        level: '初级',
        description: '全面介绍各类AI助手的使用方法和技巧',
        link: 'https://www.youtube.com/watch?v=a6J2zPH24Ok',
        author: '凤凰AI七社',
        duration: '18分钟'
    },
    {
        title: 'AI工具使用指南',
        level: '初级到中级',
        description: '深入浅出讲解AI工具的实际应用',
        link: 'https://www.youtube.com/watch?v=96EEoeHYnrQ',
        author: 'William说',
        duration: '25分钟'
    },
    {
        title: 'AI应用进阶教程',
        level: '中级',
        description: '探索AI工具的高级功能和使用技巧',
        link: 'https://www.youtube.com/watch?v=JoN9D6Bz8jk',
        author: '秋芝2046',
        duration: '30分钟'
    },
    {
        title: 'AI实用技能指南',
        level: '中级到高级',
        description: '实用的AI应用案例和最佳实践',
        link: 'https://www.youtube.com/watch?v=medbrFB0RrQ',
        author: 'Canada Jasmine Studio',
        duration: '22分钟'
    }
];

// 资源数据
const resources = [
    {
        title: 'Cursor 官方文档',
        type: '文档',
        description: 'Cursor 官方使用指南和API文档',
        link: 'https://cursor.sh/docs'
    },
    {
        title: 'Cursor GitHub',
        type: '代码仓库',
        description: 'Cursor 开源代码库和问题追踪',
        link: 'https://github.com/getcursor/cursor'
    },
    {
        title: 'Cursor Discord 社区',
        type: '社区',
        description: '加入 Cursor 官方 Discord 社区交流学习',
        link: 'https://discord.com/invite/cursor'
    },
    {
        title: 'Cursor 2.5小时完整课程（英文）',
        type: '视频',
        description: '系统全面的 Cursor 英文教程，适合深入学习',
        link: 'https://www.bilibili.com/video/BV165NfeKEgX/'
    }
];

// 社区数据
const communities = [
    {
        title: 'Cursor123学习社区',
        type: 'Telegram',
        description: 'Cursor AI编程助手中文学习交流群，分享使用技巧和学习资源',
        link: 'https://t.me/+C6KZoKD5MvI0MDE1',
        members: '持续成长中',
        language: '中文'
    }
];

// 渲染课程卡片
function renderCourses() {
    const courseGrid = document.querySelector('.course-grid');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <div class="course-meta">
                <span class="level">难度：${course.level}</span>
                <span class="duration">时长：${course.duration}</span>
            </div>
            <p class="author">讲师：${course.author}</p>
            <p class="description">${course.description}</p>
            <a href="${course.link}" target="_blank" class="course-link">开始学习</a>
        `;
        courseGrid.appendChild(courseCard);
    });
}

// 渲染资源卡片
function renderResources() {
    const resourcesGrid = document.querySelector('.resources-grid');
    resources.forEach(resource => {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <h3>${resource.title}</h3>
            <p>类型：${resource.type}</p>
            <p>${resource.description}</p>
            <a href="${resource.link}">查看详情</a>
        `;
        resourcesGrid.appendChild(resourceCard);
    });
}

// 渲染社区卡片
function renderCommunities() {
    const communityContainer = document.querySelector('.community-container');
    communities.forEach(community => {
        const communityCard = document.createElement('div');
        communityCard.className = 'community-card';
        communityCard.innerHTML = `
            <h3>${community.title}</h3>
            <div class="community-meta">
                <span class="platform"><i class="fab fa-telegram"></i> ${community.type}</span>
                <span class="language">语言：${community.language}</span>
            </div>
            <p class="description">${community.description}</p>
            <div class="community-footer">
                <span class="members">成员：${community.members}</span>
                <a href="${community.link}" target="_blank" class="join-link">加入社区</a>
            </div>
        `;
        communityContainer.appendChild(communityCard);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    renderResources();
    renderCommunities();
});

// 鼠标移动光晕效果
document.querySelectorAll('.course-card, .resource-card, .community-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
        const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
    });
});

// 鼠标移动光晕效果
document.querySelectorAll('.course-card, .resource-card, .community-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
        const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
    });
});