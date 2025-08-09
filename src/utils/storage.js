export const getData = (key) => {
        if (typeof localStorage === 'undefined') return [];
        return JSON.parse(localStorage.getItem(key) || '[]');
};

export const setData = (key, data) => {
        if (typeof localStorage === 'undefined') return;
        localStorage.setItem(key, JSON.stringify(data));
};

export const getUser = () => {
        if (typeof localStorage === 'undefined') return null;
        return JSON.parse(localStorage.getItem('user') || 'null');
};

export const setUser = (u) => {
        if (typeof localStorage === 'undefined') return;
        localStorage.setItem('user', JSON.stringify(u));
};

export const logoutUser = () => {
        if (typeof localStorage === 'undefined') return;
        localStorage.removeItem('user');
};
