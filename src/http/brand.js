import request from "./axios";

export function getBrandPage(data){
	return request({
		url: '/mall/pms-brand/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/pms-brand/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/pms-brand/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/pms-brand/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/pms-brand/edit',
		method: 'post',
		data
	});
}

