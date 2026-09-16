const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
/*       require('../image-targets/model-target.json'),
      require('../image-targets/video-target.json'),
      require('../image-targets/one.json'),
      require('../image-targets/guide.json'), */
      require('../image-targets/guide_fixed.json'),
    ],
  })
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
