//ֱ�Ӳ������ݿ�
var mongodb = require('./db');

function File(file) {
  this.name = user.name;
  this.address = user.address;
};

module.exports = File;

//��ȡ�û���Ϣ
File.get = function(name, callback) {
  //�����ݿ�
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//���󣬷��� err ��Ϣ
    }
    //��ȡ users ����
    db.collection('datas', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//���󣬷��� err ��Ϣ
      }
      //�����û�����name����ֵΪ name һ���ĵ�
      collection.findOne({
        name: name
      }, function (err, user) {
        mongodb.close();
        if (err) {
          return callback(err);//ʧ�ܣ����� err ��Ϣ
        }
        callback(null, file);//�ɹ������ز�ѯ���û���Ϣ
      });
    });
  });
};