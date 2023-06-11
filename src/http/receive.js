import request from "./axios";

export function getReceivePage(data){
	return request({
		url: '/mall/ums-member-receive-address/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/ums-member-receive-address/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/ums-member-receive-address/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/ums-member-receive-address/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/ums-member-receive-address/edit',
		method: 'post',
		data
	});
}

