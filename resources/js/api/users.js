import axios from 'axios';

const client = axios.create({
	baseURL: '/api',
});

export default {
	all() {
		//return axios.get('/api/users');
		return client.get('users', params);
	},
	find(id) {
		//return axios.get(`/api/users/${id}`);
		return client.get(`users/${id}`);
	},
	create(data) {
        return client.post('users', data);
    },
	update(id, data) {
		//return axios.put(`/api/users/${id}`, data);
		return client.put(`users/${id}`, data);
	},
	delete(id) {
		return client.delete(`users/${id}`);
	},
};