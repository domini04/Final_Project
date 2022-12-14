package com.spring.masinsa.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.ImageDTO;
import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.entity.Image;
import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.SoldoutStatus;
import com.spring.masinsa.mapper.MaskMapper;
import com.spring.masinsa.repository.MaskRepository;

@Service
public class MaskServiceImpl implements MaskService {
	
	@Autowired
	MaskRepository maskRepo;
	
	@Autowired
	MaskMapper maskMapper;
	
	@Override
	@Transactional
	public MaskDTO getMask(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		MaskDTO maskDTO = Mask.entityToDTO(mask);
		return maskDTO;
	}
	
	@Override
	@Transactional
	public MaskDTO updateSoldout(Long maskId, String soldout) {
		Mask mask = maskRepo.findMaskById(maskId);
		if(mask != null) {
			if (soldout.equals("Y")) {
				mask.updateSoldout(SoldoutStatus.Y);
		} 
			else if (soldout.equals("N")) {
				mask.updateSoldout(SoldoutStatus.N);
		}
		maskRepo.save(mask);
		MaskDTO maskDTO = Mask.entityToDTO(mask);
		return maskDTO;
		}
		return null;
	}
	
	@Override
	@Transactional
	public void updateClick(Long maskId) {
		Mask mask = maskRepo.findMaskById(maskId);
		mask.updateClick();
		maskRepo.save(mask);
	}
	
	@Override
	@Transactional
	public List<ImageDTO> getAllImages(Long maskId) {
		List<Image> imageList = maskMapper.getAllImages(maskId);
		System.out.println(imageList);
		List<ImageDTO> imageDTOList = imageList.stream()
											.map(image -> Image.entityToDTO(image))
											.collect(Collectors.toList());
		return imageDTOList;
	}
	
	@Override
	@Transactional
	public List<MaskDTO> getAllMask(String blockingIndex, String size, String shape) {
		List<Mask> maskList = maskMapper.getAllMask(blockingIndex, size, shape);
		List<MaskDTO> maskDTOList = maskList.stream()
											.map(mask -> Mask.entityToDTO(mask))
											.collect(Collectors.toList());
		return maskDTOList;
	}
	
//	public Page<MaskDTO> getAllMask(Pageable pageable) {
//		Page<Mask> maskList = maskRepo.findAll(pageable);
//		Page<MaskDTO> maskDTOList = maskList.map(MaskDTO::from);
//		return maskDTOList;
//	}
	
	
	public List<MaskDTO> getSortedMasks(String standard, Pageable pageable) {
		List<Mask> maskList = maskMapper.getSortedMasks(standard);
		List<MaskDTO> maskDTOList = maskList.stream()
											.map(mask -> Mask.entityToDTO(mask))
											.collect(Collectors.toList());
		return maskDTOList;
	}
	
	// @Override
	// @Transactional
	// public List<MaskDTO> getSortedMasksPage(String col, String order, int page, int size) {
	// 	int limit = size;
	// 	int offset = (page - 1) * size;
	// 	// System.out.println(("col : " + col + ", order : " + order + ", limit : " + limit + ", offset : " + offset));
	// 	List<Mask> maskList = maskMapper.getSortedMasksByPage(col, order, limit, offset);
	// 	System.out.println(maskList);
	// 	List<MaskDTO> maskDTOList = maskList.stream()
	// 										.map(mask -> Mask.entityToDTO(mask))
	// 										.collect(Collectors.toList());
	// 	return maskDTOList;
	// }

	@Override //col, order, page, size, filterCol, filter
	public List<MaskDTO> FilterSortMaskByPage(String sortCol, String order, Integer page, Integer size, 
	String filterCol1, String filter1, String filterCol2, String filter2, String filterCol3, String filter3) {
		Integer limit = null;
		Integer offset = null;
		//if page, size is not null, then set limit and offset
		if (size != null) {
			limit = size;
		}
		if (page != null && size != null) {
			offset = (page - 1) * size;
		}
		//테스트용
		// System.out.println(("sortCol : " + sortCol + ", order : " + order));
		// System.out.println(("limit : " + limit + ", offset : " + offset));
		// System.out.println(("filterCol1 : " + filterCol1 + ", filter1 : " + filter1));
		// System.out.println(("filterCol2 : " + filterCol2 + ", filter2 : " + filter2));
		// System.out.println(("filterCol3 : " + filterCol3 + ", filter3 : " + filter3));

		List<Mask> maskList = maskMapper.FilterSortMaskByPage(sortCol, order, limit, offset, 
		filterCol1, filter1, filterCol2, filter2, filterCol3, filter3);
		System.out.println(maskList);
		List<MaskDTO> maskDTOList = maskList.stream()
											.map(mask -> Mask.entityToDTO(mask))
											.collect(Collectors.toList());
		return maskDTOList;
	}
}


