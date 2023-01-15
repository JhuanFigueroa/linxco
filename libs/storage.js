const multer=require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+'-'+file.originalname  )
    }
  })

const storageHorarios = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/horarios/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+'-'+file.originalname  )
  }
})

const storageActas = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/actas/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+'-'+file.originalname  )
  }
})

  const upload = multer({storage: storage })
  const uploadHorarios=multer({storage:storageHorarios})
const uploadActas=multer({storage:storageActas})
  module.exports= {upload,uploadHorarios,uploadActas};
