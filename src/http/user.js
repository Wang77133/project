import request from "./axios";

export function getUserPage(data){
	return request({
		url: '/api/user/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/api/user/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/api/user/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/api/user/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/api/user/edit',
		method: 'post',
		data
	});
}

