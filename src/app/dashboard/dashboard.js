.controller('DashboardController', ['$scope', function($scope) {

    $scope.dataBarang = [];
    $scope.inputDataBarang = {};

    function generateUUID() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    }

    $scope.tambahBarang = function() {
      $scope.enable = false;
      $scope.inputDataBarang.idBarang = '';
      $scope.inputDataBarang.namaBarang = '';
      $scope.inputDataBarang.jenisBarang = '';
      $scope.inputDataBarang.tanggalKadaluarsa = '';
    };

    $scope.simpanBarang = function(barang) {
      $scope.dataBarang.push({
        'idBarang': generateUUID(),
        'namaBarang': barang.namaBarang,
        'jenisBarang': barang.jenisBarang,
        'tanggalKadaluarsa': barang.tanggalKadaluarsa
      });
    };

    $scope.editBarang = function(barang) {
      $scope.enable = true;
      $scope.index = $scope.dataBarang.indexOf(barang);
      $scope.inputDataBarang.idBarang = barang.idBarang;
      $scope.inputDataBarang.namaBarang = barang.namaBarang;
      $scope.inputDataBarang.jenisBarang = barang.jenisBarang;
      $scope.inputDataBarang.tanggalKadaluarsa = barang.tanggalKadaluarsa;
    };

    $scope.updateBarang = function(barang) {
      $scope.dataBarang[$scope.index].idBarang = barang.idBarang;
      $scope.dataBarang[$scope.index].namaBarang = barang.namaBarang;
      $scope.dataBarang[$scope.index].jenisBarang = barang.jenisBarang;
      $scope.dataBarang[$scope.index].tanggalKadaluarsa = barang.tanggalKadaluarsa;
    };

    $scope.hapusBarang = function(barang) {
      var result = confirm('Anda ingin menghapus data barang ?');
      if (result) {
        $scope.index = $scope.dataBarang.indexOf(barang);
        $scope.dataBarang.splice($scope.index, 1);
      }
    }

  }]);