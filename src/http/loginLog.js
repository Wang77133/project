import request from "./axios";

export function getLoginLogPage(data){
	return request({
		url: '/mall/ums-member-login-log/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/ums-member-login-log/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/ums-member-login-log/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/ums-member-login-log/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/ums-member-login-log/edit',
		method: 'post',
		data
	});
}

